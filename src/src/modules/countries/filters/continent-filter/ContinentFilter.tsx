import SearchIcon from '@mui/icons-material/Search';
import { Box, Checkbox, colors, FormControlLabel, FormGroup, InputAdornment, TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useCountryFilters } from '../../../../hooks/filters/useCountryFilters';
import { useAppSelector } from '../../../../store';
import { getContinentsSelector } from '../../../../store/selectors/continent-selector';

function ContinentFilter() {
  const { filters, setContinents } = useCountryFilters();
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [options, setOptions] = useState<number[]>(() => filters.filter?.continentIds ?? []);

  const continents = useAppSelector(getContinentsSelector);
  const filteredContinents = useMemo(() => {
    return continents.filter(c => c.name.toLowerCase().includes(searchFilter.toLowerCase()));
  }, [continents, searchFilter]);

  useEffect(() => {
    const current = filters.filter?.continentIds ?? [];
    const hasChanged = current.length !== options.length || current.some((id, i) => id !== options[i]);

    if (!hasChanged) {
      return;
    }

    const timeout = setTimeout(() => {
      setContinents(options);
    }, 500);

    return () => clearTimeout(timeout);
  }, [filters.filter.continentIds, options, setContinents]);

  const handleToggle = (id: number) => {
    let updated: number[];

    if (options.includes(id)) {
      updated = options.filter(item => item !== id);
    } else {
      updated = [...options, id];
    }

    updated = updated.sort((a, b) => a - b);
    setOptions(updated);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        size="small"
        fullWidth
        placeholder="Filter continents.."
        value={searchFilter}
        onChange={e => setSearchFilter(e.target.value)}
        sx={{ mb: 1 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: colors.grey[500] }} />
              </InputAdornment>
            ),
          },
        }}
      />

      <Box sx={{ maxHeight: '400px', overflowY: 'auto', pr: 1 }}>
        <FormGroup>
          {filteredContinents.map(option => (
            <FormControlLabel
              key={option.id}
              label={option.name}
              control={<Checkbox checked={options.includes(option.id)} onChange={() => handleToggle(option.id)} />}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
}

export default ContinentFilter;
