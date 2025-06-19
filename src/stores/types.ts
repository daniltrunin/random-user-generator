export interface User {
  gender: string | null;
  name: {
    title: string | null;
    first: string | null;
    last: string | null;
  };
  location: {
    street: {
      number: number | null;
      name: string | null;
    };
    city: string | null;
    state: string | null;
    country: string | null;
    postcode: number | null;
    coordinates: {
      latitude: string | null;
      longitude: string | null;
    };
    timezone: {
      offset: string | null;
      description: string | null;
    };
  };
  email: string | null;
  login: {
    uuid: string | null;
    username: string | null;
    password: string | null;
    salt: string | null;
    md5: string | null;
    sha1: string | null;
    sha256: string | null;
  };
  dob: {
    date: string | null;
    age: number | null;
  };
  registered: {
    date: string | null;
    age: number | null;
  };
  phone: string | null;
  cell: string | null;
  id: {
    name: string | null;
    value: string | null;
  };
  picture: {
    large: string | undefined;
    medium: string | undefined;
    thumbnail: string | undefined;
  };
  nat: string | null;
}
