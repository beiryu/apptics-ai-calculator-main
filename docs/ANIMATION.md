# Objective

Implement animation functionality using Framer Motion library based on the specific properties and configuration you'll provide.
Implementation Requirements:

1. Property-Based Animation:

- Utilize provided animation properties to configure Framer Motion components
- Map provided properties to appropriate Framer Motion animation attributes
- Ensure smooth animation transitions based on specified parameters

2. Framer Motion Integration:

- Import and configure necessary Framer Motion components (motion, AnimatePresence, etc.)
- Implement proper animation variants and transitions
- Handle entrance, exit, and state-change animations

3. Technical Considerations:

- Ensure optimal performance with proper animation optimization
- Handle animation lifecycle events appropriately
- Maintain compatibility with existing component structure
- Implement proper cleanup for unmounting components

Expected Outcome: Smooth, performant animations powered by Framer Motion that respond to the provided properties and integrate seamlessly with existing components.

# Animations

## Appear effect

```
{
  trigger: 'on_appear',
  preset: 'custom',
  enter: {
    opacity: 0,
    scale: 1,
    rotate: 0
    skew: {
      x: 0
      y: 0
    }
    offset: {
      x: 0,
      y: 30
    }
    transition: {
      ease: 'custom',
      bezier: [0.19, 0.39, 0.4, 0.99]
      time 0.8
      delay: 0
    }
  },
  exit: {
    opacity: 0,
    scale: 1,
    rotate: 0
    skew: {
      x: 0
      y: 0
    }
    offset: {
      x: 0,
      y: 60
    }
    transition: {
      type: 'spring',
      based_on: 'time'
      time 0.6
      bounce: 0.2
      delay: 0
    }
  },
}
```

## Scroll animation

```
{
  trigger: 'layer_in_view',
  start: 'center',
  preset: 'custom',
  enter: {
    opacity: 0,
    scale: 1,
    rotate: 0
    skew: {
      x: 0
      y: 0
    }
    offset: {
      x: 0,
      y: 60
    }
    transition: {
      ease: 'custom',
      bezier: [0.19, 0.39, 0.4, 0.99]
      time 0.8
      delay: 0
    }
  },
  exit: {
    opacity: 0,
    scale: 1,
    rotate: 0
    skew: {
      x: 0
      y: 0
    }
    offset: {
      x: 0,
      y: 60
    }
    transition: {
      type: 'ease'
      bezier: [0.19, 0.39, 0.4, 0.99]
      time 0.8
      delay: 0
    }
  },
}
```

## Scroll Variant

```
{
  trigger: 'section_in_view',
  viewport: 'center',
  replay: 'yes',
  section: '#nav-trigger',
  to: 'desktop_scroll'
}
```

## Scroll animation 2

```
{
  trigger: 'layer_in_view',
  start: 'center',
  replay: 'no',
  preset: 'custom',
  enter: {
    opacity: 0,
    scale: 0.9,
    rotate: 0
    skew: {
      x: 0
      y: 0
    }
    offset: {
      x: 0,
      y: 0
    }
    transition: {
      ease: 'custom',
      bezier: [0.22, 0.61, 0.56, 1]
      time 1
      delay: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    rotate: 0
    skew: {
      x: 0
      y: 0
    }
    offset: {
      x: 0,
      y: 0
    }
    transition: {
      ease: 'custom',
      bezier: [0.22, 0.61, 0.56, 1]
      time 1
      delay: 0.1
    }
  },
}
```
