// src/app/models/resource.model.ts
export interface Resource {
  id?: number;
  title: string;
  description: string;
  category_id: number;
  scripture: string;
  created_at?: string;
}
