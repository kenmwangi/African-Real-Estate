interface FileType extends File {
  photos: string;
}
export type FormValuesType = {
  housing: string;
  sale: string;
  title: string;
  explanation: string;
  price: number;
  number_of_room: number;
  gross_m2: number;
  net_m2: number;
  warming_type: string;
  building_age: number;
  floor_location: number;
  avaliable_for_loan: string;
  furnished: string;
  status: string;
  dues: number;
  swap: string;
  front: string;
  rental_income: number;
  address: string;
  external_features: string[];
  interior_features: string[];
  author: string;
  email: string;
  photos: FileType[];
  mobile_number: string;
  mobile_number_2: string;
  telephone: string;
  created_at: number;
  latlng: {
    lat: number;
    lng: number;
  };
};
