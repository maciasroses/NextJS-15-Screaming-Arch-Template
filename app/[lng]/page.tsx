import Form from "next/form";

export default function Home() {
  return (
    <main>
      <h1 className="">Hello, template</h1>
      <Form action="/search">
        <input type="text" name="q" />
        <button type="submit">Search</button>
      </Form>
    </main>
  );
}
