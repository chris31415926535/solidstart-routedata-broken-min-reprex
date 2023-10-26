# The Problem

I'm trying to get route-based data loading to work.

As per [the documentation](https://start.solidjs.com/core-concepts/data-loading), it seems like it's supposed to load `routeData()` along the route path and expose it to each segment along the requested path when you run `useRouteData()`.

But in this silly minimal example I can't get the `routeData()` to pass from a single top segment to a single lower segment.

Here's the top segment at ~/test1/index.tsx:

```
// ~/test1/index.tsx
import { createRouteData, useRouteData } from "solid-start";

export function routeData() {
    const test1 = createRouteData(() => {
        return "test1";
    });
    return { test1 };
}

export default function Testing() {

    const { test1 } = useRouteData<typeof routeData>();

    return (
        <main>
            <p>testing top page</p>
            <p>{test1()}</p>
        </main>
    )
}
```

Here's the lower segment at ~/test1/test2/index.tsx:

```
// /routes/test1/test2/index.tsx

import { createRouteData, useRouteData } from "solid-start";

export function routeData() {
    const test2 = createRouteData(async () => {
        return "test2";
    });
    return { test2 }
}

export default function Test2() {
    // test1 doesn't load
    const { test1, test2 } = useRouteData();
    // when we log, we only see test2
    const data = useRouteData();
    console.log(data)
    return (
        <main>
            {/* <p>{test1()}</p> // this crashes!!! */}
            <p>{test2()}</p>
        </main>
    )
}
```

In test2.tsx, `test1` isn't visible. It doesn't seem to be loading even though it's in test1.tsx's route path.

Why?!
