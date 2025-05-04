
type RichTextNode = {
    type: string;
    format?: string;
    children: RichTextNode[];
    text?: string;
    bold?: boolean;
  };

export type FAQPageType = {
  id: number;
  documentId: string;
  title: string;
  body: RichTextNode[];
  slug: string;
};
