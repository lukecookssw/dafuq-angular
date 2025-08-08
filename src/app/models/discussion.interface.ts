export interface Discussion {
  id: string;
  title: string;
  bodyHtml: string;
  url: string;
  author: Author;
  createdAt: string;
}

export interface Author {
  login: string;
}