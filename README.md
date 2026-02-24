<!-- 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->
answer-  getElementById, getElementsByClassName, querySelector ar querySelectorAll er moddhe main difference holo selection system. getElementById diye ami ekta specific id er element dhori. getElementsByClassName diye same class thaka onek gula element pai. Ar querySelector CSS selector use kore first match ta dhore, querySelectorAll shob match gula dhore.



<!-- 2. How do you create and insert a new element into the DOM? -->
2. Notun element create korte ami prothome document.createElement() use kori. Tarpor element e text ba class add kori. Finally append() ba appendChild() diye oi element ta DOM e add kori. Mane process ta holo create → modify → insert.



3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?

2. Notun element create korte ami prothome document.createElement() use kori. Tarpor element e text ba class add kori. Finally append() ba appendChild() diye oi element ta DOM e add kori. Mane process ta holo create → modify → insert.

3. Event Bubbling mane hocche jokhon kono element e event hoy, event ta child theke parent er dike upore uthe jai. Dhoro button e click korle, tar parent div o oi click event peye jai. Eta automatic vabe hoy.

4. Event Delegation mane hocche ami alada alada child element e event na diye parent element e ekta event listener dei. Event bubbling er maddhome parent bujhte pare kon child e event hoise. Eta useful karon performance better hoy, code clean thake, ar dynamic element eo kaj kore.

5. preventDefault() ar stopPropagation() er moddhe difference holo — preventDefault() browser er default kaj bondho kore, jemon form submit hole page reload na kora. Ar stopPropagation() event ke parent e jawa theke stop kore, mane bubbling bondho kore.

