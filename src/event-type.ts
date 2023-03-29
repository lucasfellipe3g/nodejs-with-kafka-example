import avro from 'avsc'

export const type = avro.Type.forSchema({
  type: 'record',
  name: 'Pet',
  fields: [
    {
      name: 'kind',
      type: { type: 'enum', name: 'PetKind', symbols: ['CAT', 'DOG'] },
    },
    { name: 'noise', type: 'string' },
  ],
})
