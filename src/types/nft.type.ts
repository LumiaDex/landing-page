interface NFTItem {
  name: string;
  symbol: string;
  royalty: number;
  image_uri: string;
  cached_image_uri: string;
  animation_url: string;
  cached_animation_url: string;
  metadata_uri: string;
  description: string;
  mint: string;
  owner: string;
  update_authority: string;
  creators: Creator[];
  collection: Collection;
  attributes: Record<string, string>;
  attributes_array: Attribute[];
  files: File[];
  external_url: string;
  is_loaded_metadata: boolean;
  primary_sale_happened: boolean;
  is_mutable: boolean;
  token_standard: string;
  is_compressed: boolean;
  merkle_tree: string;
  is_burnt: boolean;
}

interface Creator {
  address: string;
  share: number;
  verified: boolean;
}

interface Collection {
  address: string;
  verified: boolean;
}

interface Attribute {
  trait_type: string;
  value: string;
}

interface File {
  uri: string;
  type: string;
}
