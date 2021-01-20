export interface Feed {
  title: string;
  content: string;
  time: Date;
  image?: string;
  video?: string;
}
export interface Review extends Feed {
  rating: number;
}
