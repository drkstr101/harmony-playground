---
labels: ["react", "roboto mono", "font"]
description: "RobotoMono font"
---

### Overview

This component envelope the signature "CircularPro book" font of Bit projects.

```tsx
import { bookFont } from "@watheia/app.theme.fonts.book"

function ClientContext({ children }) {
  return (
    <div className={bookFont}>
      {children}
      <div>I am text that will appear in CircularPro Book font!</div>
    </div>
  )
}
```
