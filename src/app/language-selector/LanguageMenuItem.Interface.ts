import { MenuItem } from 'primeng/api';

export interface LanguageMenuItem extends MenuItem {
  code?: string,
  message?: string,
}
