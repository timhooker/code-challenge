FROM ruby:2.4.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# Node.js
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - \
&& apt-get install -y nodejs

RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update && apt-get install -y yarn

RUN mkdir /cars
WORKDIR /cars

ADD Gemfile /cars/Gemfile
ADD Gemfile.lock /cars/Gemfile.lock

RUN bundle install
RUN yarn install

ADD . /cars

# Get stuff running
ENTRYPOINT ["./docker-entry.sh"]