import * as React from "react";

export * from "@octokit/types";

export interface RepoCardPropTypes {
    username: string;
    repository: string;
    Loading?: typeof React.Component;
}

export interface GitHubEmojiPropTypes {
    name: string;
}