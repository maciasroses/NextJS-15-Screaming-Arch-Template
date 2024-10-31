import Form from "next/form";
import { IBaseLangPage } from "../shared/interfaces";

export default async function Home({ params }: IBaseLangPage) {
  const { lng } = await params;
  return (
    <main>
      <h1 className="animate-rotate-x animate-infinite animate-duration-[2000ms]">
        Hello, template
      </h1>
      <Form action={`${lng}/search`}>
        <input type="text" name="q" />
        <button type="submit">Search</button>
      </Form>
      <article className="prose dark:prose-invert">
        <h1>This is a title</h1>
        <p>This is a paragraph</p>
        <strong>This is a strong</strong>
      </article>
    </main>
  );
}
