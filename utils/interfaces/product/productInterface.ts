
interface imageInterface{
  id:string;
  path:string;
}
export interface productInterface {
  _id?: string;
  name?: string;
  title?: string;
  price?: string;
  image: [imageInterface];



  hashtag?: [];
  sale?: string;
  colors?: string[];
  description?: string;
  subImage?: string[];
  color?: string;
}
