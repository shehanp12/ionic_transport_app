

export interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface PlaceLocation extends Coordinates {
    address: string;
    /* staticMapImageUrl: string; */
  }

  export interface position {
    lat: number;
    lng: number;
  }
  