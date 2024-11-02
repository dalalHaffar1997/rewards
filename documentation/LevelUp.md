This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# `LevelUp` Component Documentation

The `LevelUp` component is a React component built with Next.js and Tailwind CSS. It features a progress bar, a modal pop-up, and a congratulatory message to celebrate leveling up in an application.

---

## Features

- **Progress Bar**: Displays a dynamic progress indicator for XP.
- **Title and Badge**: Shows a "Level Up" title and badge image.
- **Claim NFT Badge Button**: Allows users to claim an NFT badge.
- **Animated Elements**: Smooth transitions and animations for enhanced user experience.
- **Responsive Design**: Optimized for various screen sizes.

---

## Dependencies

- **React**: For creating the component.
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For styling.
- **Framer Motion**: For animations.

---

## Component Structure

### Main Container
- **Styles**: Occupies the full screen with a yellow background (`bg-yellow-900 h-screen`).
- **Layout**: Positioned responsively with `motion.div` for animated transitions.

### Fireworks and Title
- **Fireworks**: Displayed using `<Fireworks />`, creating a celebratory effect on render.
- **Title**: Stylized with `gradient-text` and uppercase, displaying the text "Level Up".

### Badge Display
- **Image**: Renders a badge using `next/image`, with `alt="Level Badge"` for accessibility.
- **Level Label**: Shows the level title (e.g., "Corporal") beneath the badge.

### Progress Bar
The progress bar includes two elements:
- **XP Counter**: Displays current XP (34,500) out of the total (50,000).
- **Bar**: Visually represents progress, updated dynamically based on the `progress` state.

### Claim Button and Modal
- **Claim Button**: Clicking toggles `showModal`, opening the `PopUpModal` to claim the NFT badge.
- **Modal**: Displays `PopUpModal` when `showModal` is true, triggered by `handelShowModal`.

---

## State Management

- **`showModal`**: Boolean state controlling modal visibility.
- **`progress`**: Numeric state tracking the progress percentage.

---

## Functions

- **`handelShowModal`**: Toggles the `showModal` state to control modal display.<br>
**showModal**: Controls the visibility of the claim modal.<br>
**progress**: Tracks the user's XP progress, incremented periodically until it reaches a cap.
```
const handelShowModal = () => {
  setShowModal(!showModal);
};
```

---

## Effects

- **`useEffect`**: Animates the progress bar from 35% to 70%.<br>
  **Purpose**: Increases the progress state by 1% every 70 milliseconds until reaching 70%.<br>
  **Unmounting**: Clears the interval on component unmount to prevent memory leaks.<br>
```
useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => (prev < 70 ? prev + 1 : 70));
  }, 70);

  return () => clearInterval(timer);
}, []);
```
---

## JSX Structure

- **Container**: Full-screen `<div>` with background styling.
- **Title and Badge**: Displays the "Level Up" title and a badge image.
- **Progress Bar**: Visual representation of XP progress with dynamic width.
- **Modal Button**: Button to open the modal for claiming the NFT badge.
- **Modal**: Conditionally renders a modal component when `showModal` is `true`.
- **Informational Text**: Provides additional details about claiming badges.

---

## Styles

- **Tailwind CSS Classes**: Used for layout and styling.
- **Custom Styles**: Includes gradients, shadows, and animations.
- **Responsive Design**: Ensures optimal viewing on all devices.
