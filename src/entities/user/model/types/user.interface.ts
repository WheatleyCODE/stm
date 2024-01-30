export interface IUsersResponse {
  results: IUser[];
  info: IInfo;
}

export interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface IUser {
  gender: Gender;
  name: Name;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export type Dob = {
  date: string;
  age: number;
};

export type Gender = 'male' | 'female';

export type ID = {
  name: string;
  value: string;
};

export interface ILocation {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export type Coordinates = {
  latitude: string;
  longitude: string;
};

export type Street = {
  number: number;
  name: string;
};

export type Timezone = {
  offset: string;
  description: string;
};

export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};
