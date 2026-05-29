import * as migration_20260528_154740 from './20260528_154740';
import * as migration_20260528_163707 from './20260528_163707';
import * as migration_20260528_164705 from './20260528_164705';

export const migrations = [
  {
    up: migration_20260528_154740.up,
    down: migration_20260528_154740.down,
    name: '20260528_154740',
  },
  {
    up: migration_20260528_163707.up,
    down: migration_20260528_163707.down,
    name: '20260528_163707',
  },
  {
    up: migration_20260528_164705.up,
    down: migration_20260528_164705.down,
    name: '20260528_164705'
  },
];
