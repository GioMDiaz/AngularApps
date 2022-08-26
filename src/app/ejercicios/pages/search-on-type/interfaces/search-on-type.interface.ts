export interface Universidad {
    domains:          string[];
    alpha_two_code:   string;
    country:          string;
    web_pages:        string[];
    name:             string;
    "state-province": null | string;
}

export interface Country {
    name: Name;
  }
  
 export interface Name {
    common: string;
  }
