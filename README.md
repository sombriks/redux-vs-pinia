# Experiment to compare redux with pinia

Small experiment to see how achieve same result using pure vue, vue with pinia
and react with redux.

## The components

![product-screen](products.jpg)

I want a certain set of behaviors here:

1. Login/logoff resets the filter and paginator.
1. Filter changes resets the paginator.
1. Each named element is a distinct component.

## Observed results

I've added a store-less vue version to use as benchmark. The extra complexity
and tight coupling are alarming.

React in 2022 isn't the same as 2018. This is why I've added a second react
example using redux toolkit instead just plain old redux

Pinia is dead simple to configure and components relying on it are much simper
to maintain.

WIP
