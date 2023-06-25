'use client';

import { useEffect, useState } from 'react';
import Arweave from 'arweave';

interface Persona {
  avatar: string;
  name: string;
  bio: string;
}

const arweave = Arweave.init({});

const PersonasPage: React.FC = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const queryObject = {
      query: `{
        transactions(
          first: 100,
          tags: [
            {
              name: "Schema-Id",
              values: ["773b01f7f3a149d21afe9d2c9993c5a2aace2146"]
            },
            {
              name: "Content-Type",
              values: ["application/json"]
            }
          ]
        ) 
        {
          edges {
            node {
              id
              tags {
                name
                value
              }
            }
          }
        }
      }`
    };

    const fetchPersonas = async () => {
      try {
        const results = await arweave.api.post('/graphql', queryObject);
        const personaTransactions = results.data.transactions.edges;

        const fetchedPersonas: Persona[] = await Promise.all(
          personaTransactions.map(async (transaction: any) => {
            try {
              const txId = transaction.node.id;
              const data = await arweave.transactions.getData(txId, { decode: true, string: true });
              return JSON.parse(data) as Persona;
            } catch (error) {
              console.error(`Error parsing persona data for transaction ${transaction.node.id}:`, error);
              return null;
            }
          })
        );

        // If the fetched personas are empty, fallback to dummy personas
        // TODO: Remove this fallback once actual data is available
        if (fetchedPersonas.length === 0) {
          setPersonas([
            {
              avatar: 'data:image/png;base64,dummy1',
              name: 'Dummy One',
              bio: 'This is a dummy persona.'
            },
            {
              avatar: 'data:image/png;base64,dummy2',
              name: 'Dummy Two',
              bio: 'This is another dummy persona.'
            },
          ]);
        } else {
          setPersonas(fetchedPersonas.filter((persona): persona is Persona => persona !== null));
        }
      } catch (error) {
        console.error('Error fetching personas:', error);
      }
    };

    fetchPersonas();
  }, []);

  return (
    <div>
      <h1>Personas</h1>
      {personas.map((persona, index) => (
        <div key={index}>
          <img src={persona.avatar} alt="avatar" />
          <h2>{persona.name}</h2>
          <p>{persona.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default PersonasPage;
