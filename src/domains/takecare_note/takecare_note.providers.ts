import { TakecareNote } from './takecare_note.entity';
export const takecare_noteProviders = [
  {
    provide: 'TAKECARE_NOTE_REPOSITORY',
    useValue: TakecareNote,
  },
];
