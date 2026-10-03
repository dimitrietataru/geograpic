import { DataGrid, type DataGridProps } from '@mui/x-data-grid';

function AppDataGrid({ sx, getRowClassName, ...props }: DataGridProps) {
  return (
    <DataGrid
      sx={[
        { height: '100%', width: '100%', fontSize: 12, px: 1 },
        {
          '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': { outline: 'none' },
          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': { outline: 'none' },
        },
        // {
        //   '& .MuiDataGrid-virtualScroller': { scrollSnapType: 'y proximity' },
        //   '& .MuiDataGrid-row': { scrollSnapAlign: 'start' },
        // },
        ({ palette }) => ({
          '& .row-even': { backgroundColor: palette.dataGrid.rowEven },
          '& .row-odd': { backgroundColor: palette.dataGrid.rowOdd },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      getRowClassName={getRowClassName ?? (p => (p.indexRelativeToCurrentPage % 2 === 0 ? 'row-even' : 'row-odd'))}
      checkboxSelection={false}
      disableRowSelectionOnClick
      columnHeaderHeight={56}
      rowHeight={60}
      sortingMode="server"
      sortingOrder={['asc', 'desc', null]}
      paginationMode="server"
      pageSizeOptions={[10, 25, 50, 100]}
      autoPageSize={false}
      slotProps={{ pagination: { showFirstButton: true, showLastButton: true } }}
      {...props}
    />
  );
}

export default AppDataGrid;
