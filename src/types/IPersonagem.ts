type origin = {
  name: string;
  url: string;
};

type location = {
  name: string;
  url: string;
};

export default interface IPersonagem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: origin;
  location: location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  favorito?: boolean;
}
