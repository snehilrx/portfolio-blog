import { Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { DarkModeSwitch } from './ColorToggle';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { colors, primaryColor } = useMantineTheme()
  return (
    <Group position="center" p="sm">
      <DarkModeSwitch 
        checked={colorScheme == "dark"} onChange={() => toggleColorScheme()}
        sunColor={colors[primaryColor][3]}
        moonColor='#909090'
        size={36}
      />
    </Group>
  );
}
