```javascript
// pages/api/hello.js
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // This is a minimal Next.js API route
  res.status(200).json({ name: 'John Doe' })
}
```
Adding `import type { NextApiRequest, NextApiResponse } from 'next'` solves the issue by providing the correct types for the request and response objects.