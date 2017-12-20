FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /cars
WORKDIR /cars
COPY Gemfile /cars/Gemfile
COPY Gemfile.lock /cars/Gemfile.lock
RUN bundle install
COPY . /cars