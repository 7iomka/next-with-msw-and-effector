# Mock Service Worker Example (Next.js + effector)

## How to use

Execute [`yarn install`], and

```bash
yarn dev
```

## Issues
### MSW
Try to update msw to version 0.42 `yarn add msw@latest` I receive this error
```
error - Invariant Violation: Failed to respond to "GET http://localhost:3000/backend-api/xxxx" request: the "request" event has already been responded to.
    at setupServerListener (/Users/7iomka/Downloads/iherb/test/with-msw-app/node_modules/msw/lib/node/index.js:1249:17) {
```

### Effector
- Effector stores become empty when saving files (probably a problem with hot reload from next.js)