
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Framework' | 'Tool';
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
