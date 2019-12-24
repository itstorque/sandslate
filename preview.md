---
title: Theme Preview
layout: page
---

{:.page_title}
#### Pre-Title Content
# Some Title

# This is a title
## Subtitle

{:.embed_title}
![IMAGE](https://images.unsplash.com/photo-1554296048-b59c9fca4857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1966&q=80)
<h1>Embedded Title</h1>

{:.multicols}
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea consequatur? Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil vel illum qui eum fugiat quo voluptas.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea consequatur? Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil vel illum qui eum fugiat quo voluptas.

![IMAGE](https://images.unsplash.com/photo-1576135045823-8c8f07ed7ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80)

This is a demonstration of lists:

* cras
* pellentesque id
* dictum sit

## Header 2

1. morbi blandit
2. eu mauris
3. auctor augue

### Header 3

{:.multicols}
1. morbi blandit
2. eu mauris
3. auctor augue
4. pellentesque id
5. cras
6. lorem

#### Header 4

> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea consequatur? Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam nihil vel illum qui eum fugiat quo voluptas.

## Some code highlighting:

```c
#include<stdio.h>
void quicksort(int number[25],int first,int last){
   int i, j, pivot, temp;

   if(first<last){
      pivot=first;
      i=first;
      j=last;

      while(i<j){
         while(number[i]<=number[pivot]&&i<last)
            i++;
         while(number[j]>number[pivot])
            j--;
         if(i<j){
            temp=number[i];
            number[i]=number[j];
            number[j]=temp;
         }
      }

      temp=number[pivot];
      number[pivot]=number[j];
      number[j]=temp;
      quicksort(number,first,j-1);
      quicksort(number,j+1,last);

   }
}

int main(){
   int i, count, number[25];

   printf("How many elements are u going to enter?: ");
   scanf("%d",&count);

   printf("Enter %d elements: ", count);
   for(i=0;i<count;i++)
      scanf("%d",&number[i]);

   quicksort(number,0,count-1);

   printf("Order of Sorted elements: ");
   for(i=0;i<count;i++)
      printf(" %d",number[i]);

   return 0;
}
```
