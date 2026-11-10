import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{ state: RootState }>();
