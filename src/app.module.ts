import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLDateTime } from 'graphql-iso-date';
import { DonationsModule } from './donations/donations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // ディフォルトのplaygroundではなくApolloSandboxを使用する
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // Schema firstのアプローチのため、スキーマ定義ファイルの場所を定義する
      typePaths: ['./**/*.graphql'],
      // graphql-iso-dateのDateTimeを使用する
      // graphqlスキーマファイルのDateTimeと関連する
      resolvers: { DateTime: GraphQLDateTime },
    }),
    DonationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
