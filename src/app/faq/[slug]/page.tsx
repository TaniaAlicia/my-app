import FAQSection from "../../components/faq/FAQSection";
import faqsApi from "../../../services/faqs/faqs.service";

const renderBodyBlock = (block: any, index: number) => {
  if (block.type === "paragraph") {
    return (
      <p key={index}>
        {block.children.map((child: any, i: number) => {
          if (child.bold) {
            return <strong key={i}>{child.text}</strong>;
          }
          return <span key={i}>{child.text}</span>;
        })}
      </p>
    );
  }

  if (block.type === "list" && block.format === "unordered") {
    return (
      <ul key={index} className="list-disc ml-6">
        {block.children.map((item: any, i: number) => (
          <li key={i}>
            {item.children.map((child: any, j: number) => (
              <span key={j}>{child.text}</span>
            ))}
          </li>
        ))}
      </ul>
    );
  }

  return null;
};


export default async function FAQPage({
  params,
}: {
  params: { slug: string };
}) {
  const faqPages = await faqsApi.getFAQPages();
  const faqPage = faqPages.data.find((page) => page.slug === `/${params.slug}`);

  return (
    <main>
      <section>
        <FAQSection sections={faqPages.data} />
      </section>
      <section className="flex flex-col mt-8">
        <h2>{faqPage?.title}</h2>
        {/* <div>{faqPage?.body}</div> */}
        <div>
          {faqPage?.body.map((block: any, index: number) =>
            renderBodyBlock(block, index)
          )}
        </div>
      </section>
    </main>
  );
}
