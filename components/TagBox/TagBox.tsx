import { createStyles, Box, Text, Group, rem, Chip, Container } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';
import WithRipple, { RippleButton } from '../../ui/WithRipple';
import { useState } from 'react';


export interface TagBoxProps {
  tags: Array<string>;
  filter: (items: Array<String>) => void
}

export function TagBox({ tags, filter }: TagBoxProps) {
  const [value, setValue] = useState<Array<string>>([]);

  return (
    <Container>
      <Group>
      <Chip.Group multiple value={value} onChange={(items) => {
      setValue(items)
      filter(items)
    }}>
      {tags.map((tag) => {
        return <Chip variant="filled" key={tag} value={tag}>{tag}</Chip>
      })}
    </Chip.Group>
    </Group>
    </Container>
  );
}