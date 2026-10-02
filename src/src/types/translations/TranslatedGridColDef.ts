import { type GridColDef, type GridValidRowModel } from '@mui/x-data-grid';
import type { TableTranslationKey } from './TableTranslationKey';

export type TranslatedGridColDef<T extends GridValidRowModel> = GridColDef<T> & { headerName: TableTranslationKey };
