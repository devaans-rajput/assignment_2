/**
 * Assignment 2: String and Array Problem-Solving Toolkit
 * Run with: node toolkit.js
 */

// 1. Reverse a string without using reverse()
// Approach: Walk the string from the last index to the first and build the result.
// Time: O(n)  |  Space: O(n)
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// 2. Check whether a string is a palindrome
// Approach: Ignore case and non-alphanumeric characters, then use two pointers
// moving inward from both ends, comparing characters.
// Time: O(n)  |  Space: O(n) for the cleaned string
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

// 3. Count vowels and consonants in a string
// Approach: Scan each character once. Only letters are counted; if a letter is
// one of a, e, i, o, u it is a vowel, otherwise a consonant.
// Time: O(n)  |  Space: O(1)
function countVowelsConsonants(str) {
  const vowels = "aeiou";
  let v = 0;
  let c = 0;
  for (const ch of str.toLowerCase()) {
    if (ch >= "a" && ch <= "z") {
      if (vowels.includes(ch)) v++;
      else c++;
    }
  }
  return { vowels: v, consonants: c };
}

// 4. Second-largest distinct number in an array
// Approach: Track the largest and second-largest in a single pass. A value equal
// to the current largest is skipped so only distinct values count.
// Returns null if there is no second distinct value.
// Time: O(n)  |  Space: O(1)
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num < first && num > second) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

// 5. Remove duplicates without using Set
// Approach: Keep a plain-object lookup of values already seen (key includes the
// type so 1 and "1" stay different) and push only first occurrences, which
// preserves the original order.
// Time: O(n)  |  Space: O(n)
function removeDuplicates(arr) {
  const seen = Object.create(null);
  const result = [];
  for (const item of arr) {
    const key = typeof item + ":" + String(item);
    if (!seen[key]) {
      seen[key] = true;
      result.push(item);
    }
  }
  return result;
}

// 6. Sum of all even numbers in an array
// Approach: Loop through the array and add a number to the running total only
// when num % 2 === 0.
// Time: O(n)  |  Space: O(1)
function sumOfEvens(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
}

// 7. Frequency of a given element in an array
// Approach: Scan the array once and increment a counter on every strict match.
// Time: O(n)  |  Space: O(1)
function frequencyOf(arr, target) {
  let count = 0;
  for (const item of arr) {
    if (item === target) count++;
  }
  return count;
}

// 8. Check whether two strings are anagrams
// Approach: Ignore case and non-letters, then count characters of the first
// string up and characters of the second string down in one map. If every count
// ends at zero, the strings use the same letters.
// Time: O(n + m)  |  Space: O(k), k = distinct characters
function areAnagrams(a, b) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const s1 = clean(a);
  const s2 = clean(b);
  if (s1.length !== s2.length) return false;

  const counts = {};
  for (const ch of s1) counts[ch] = (counts[ch] || 0) + 1;
  for (const ch of s2) {
    if (!counts[ch]) return false;
    counts[ch]--;
  }
  return true;
}

// 9. Move all zeros to the end, keeping the order of non-zero elements
// Approach: Use a write pointer. Copy each non-zero element forward to the write
// position, then fill the remaining positions with zeros. Works in place.
// Time: O(n)  |  Space: O(1)
function moveZeros(arr) {
  let write = 0;
  for (let read = 0; read < arr.length; read++) {
    if (arr[read] !== 0) {
      arr[write++] = arr[read];
    }
  }
  while (write < arr.length) {
    arr[write++] = 0;
  }
  return arr;
}

// ---------------------------------------------------------------------------
// Demo / sample tests
// ---------------------------------------------------------------------------
if (require.main === module) {
  console.log(reverseString("hello")); // "olleh"
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("hello")); // false
  console.log(countVowelsConsonants("Hello World")); // { vowels: 3, consonants: 7 }
  console.log(secondLargest([10, 5, 20, 8, 20])); // 10
  console.log(secondLargest([5, 5, 5])); // null
  console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
  console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // 12
  console.log(frequencyOf([1, 2, 2, 3, 2], 2)); // 3
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world")); // false
  console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
}

module.exports = {
  reverseString,
  isPalindrome,
  countVowelsConsonants,
  secondLargest,
  removeDuplicates,
  sumOfEvens,
  frequencyOf,
  areAnagrams,
  moveZeros,
};