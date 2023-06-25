'use client';

import { useBundlr } from '@/hooks/useBundlr'

const defaultVals = {
  tags: [
    { name: "Content-Type", value: "application/json" }
  ],
  data: {
    a: 1,
    b: 2
  }
}

export default function Page() {
  const { data: bundlr, isReady } = useBundlr()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);

    // Or you can work with it as a plain object:
    const { data, tags: rawTags } = Object.fromEntries(formData.entries());
    const tags = JSON.parse(rawTags as string)

    if (bundlr) {
      const upload = async () => {
        // await bundlr.ready()
        console.log({ bundlr, isReady })
        const res = await bundlr.upload(data as string, tags)
        console.log(`Data uploaded ==> https://arweave.net/${res.id}`)
      }
      upload()
    }
  }

  return (
    <main className="p-4">
      <h1>Bundlr</h1>
      <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>
          <h2>Tags:</h2>
          <textarea className="block border-2 border-black p-3 w-full h-60" name="tags" defaultValue={JSON.stringify(defaultVals.tags)}></textarea>
        </label>
        <label>
          <h2>Data:</h2>
          <textarea className="block border-2 border-black p-3 w-full h-60" name="data" defaultValue={JSON.stringify(defaultVals.data)}></textarea>
        </label>
        <button
          className="block border-2 border-black px-3 py-1 active:bg-gray-600 active:text-white"
          disabled={!isReady}>
          Submit
        </button>
      </form>
    </main>
  )
}
