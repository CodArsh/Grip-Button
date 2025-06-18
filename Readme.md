# 🚀 GripButton – React Native Animated UI

![GripButton Demo](https://github.com/CodArsh/hello-name/blob/main/assets/DemoFile.gif)

---


## 📦 Installation

```bash
npm install react-native-grip-button
# or
yarn add react-native-grip-button
```
---


## ⚡ Features

🌀 8+ Variants: solid, outline, clear, dashed, ghost, link, elevated, glass

🎨 Theme colors: info, success, error, warning, etc.

🧱 Sizes: small, medium, large

🔒 Disabled state

🔁 Loading state

🔘 Icons with position control

🎯 Debounced press

💫 Press animations: scale, punch, none

🔵 Continuous border animation (for special variants)

🧩 Custom styles, ripple effects, and shape options

🔤 Title formatting: uppercase, capitalize, none

---


## ⚙️ Usage
```
import React from 'react';
import { Text } from 'react-native';
import { GripButton } from 'react-native-grip-button';

const MyScreen = () => {
  return (
    <GripButton
      title="Delete"
      variant="dashed"
      colorType="error"
      icon={<Text>🗑️</Text>}
      animationType="scale"
      titleCase="capitalize"
      shape="pill"
      onPress={() => alert('Deleted!')}
    />
  );
};
```
---

## 📋 Props
| Parameter         | Type                                                                                                      | Description                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `title`           | `string`                                                                                                  | The text label of the button.               |
| `onPress`         | `() => void`                                                                                              | Function to call on button press.           |
| `variant`         | `'solid'` \| `'outline'` \| `'clear'` \| `'dashed'` \| `'ghost'` \| `'link'` \| `'elevated'` \| `'glass'` | Style variant of the button.                |
| `colorType`       | `'info'` \| `'success'` \| `'error'` \| `'warning'`                                                       | Button color scheme.                        |
| `size`            | `'small'` \| `'medium'` \| `'large'`                                                                      | Controls button size.                       |
| `shape`           | `'rounded'` \| `'pill'` \| `'square'`                                                                     | Border radius styling.                      |
| `icon`            | `ReactNode`                                                                                               | Optional icon inside the button.            |
| `iconPosition`    | `'left'` \| `'right'`                                                                                     | Icon placement relative to title.           |
| `disabled`        | `boolean`                                                                                                 | Disable interaction.                        |
| `loading`         | `boolean`                                                                                                 | Show loading spinner instead of title.      |
| `titleCase`       | `'uppercase'` \| `'capitalize'` \| `'none'`                                                               | Case style of the title text.               |
| `animationType`   | `'scale'` \| `'punch'` \| `'none'`                                                                        | Press animation variant.                    |
| `debounced`       | `boolean`                                                                                                 | Prevents rapid re-pressing.                 |
| `ripple`          | `boolean`                                                                                                 | Enables ripple effect on Android.           |
| `style`           | `ViewStyle`                                                                                               | Custom style for the button container.      |
| `textStyle`       | `TextStyle`                                                                                               | Custom style for the text.                  |
| `loaderColor`     | `string`                                                                                                  | Custom color for loading spinner.           |
| `borderAnimation` | `boolean`                                                                                                 | Adds animated glowing border around button. |
---

# 🙋‍♂️ Author
Developed by ❤️ by Arsil Malek

