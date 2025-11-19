# README.md

## TypeScript Blog (Bangla)

নীচে TypeScript সম্পর্কিত দুটি গুরুত্বপূর্ণ টপিক নিয়ে বিস্তারিত আলোচনা
করা হলো।

------------------------------------------------------------------------

## 1. Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ `interface` এবং `type` উভয়ই ডাটা স্ট্রাকচারের গঠন নির্ধারণ
করতে ব্যবহৃত হয়। যদিও তাদের উদ্দেশ্য প্রায় একই, তবে বেশ কিছু
গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### 1. Declaration Merging (ডিক্লারেশন মার্জিং)

`interface` একাধিকবার ঘোষণা করা হলে সেগুলো স্বাভাবিকভাবে merge হয়।
কিন্তু `type` এ এই সুবিধা নেই।

``` ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const person: User = { 
  name: "Fahad", 
  age: 25 
};
```

`type` এ একই নাম দুইবার ঘোষণা করলে error হবে:

``` ts
type User = { name: string };
type User = { age: number }; // Error
```

### 2. Primitive alias

`type` দিয়ে primitive alias তৈরি করা যায় কিন্তু interface দিয়ে নয়।

``` ts
type ID = string | number;
```

### 3. Union ও Intersection

`type` union ও intersection উভয়ই করতে পারে।

``` ts
type A = { name: string };
type B = { age: number };
type C = A & B;
```

### সংক্ষেপে

-   Interface ব্যবহার হয় object structure নির্ধারণে।
-   Type alias আরও flexible এবং primitive alias, union, intersection
    ইত্যাদি সমর্থন করে।

------------------------------------------------------------------------

## 2. any, unknown এবং never টাইপের পার্থক্য

### any

যেকোনো টাইপের মান গ্রহণ করে এবং কোনো টাইপ চেক করে না।

``` ts
let value: any = "Hello";
value = 10;
value.test(); // No error
```

### unknown

এটিও যেকোনো মান ধারণ করতে পারে, তবে ব্যবহারের আগে টাইপ চেক করা
বাধ্যতামূলক।

``` ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### never

`never` এমন ফাংশনের রিটার্ন টাইপ যেখানে ফাংশন কখনোই মান ফেরত দেয় না।

``` ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```
