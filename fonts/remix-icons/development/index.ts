export type IndexId =
  | "braces-fill"
  | "braces-line"
  | "brackets-fill"
  | "brackets-line"
  | "bug-2-fill"
  | "bug-2-line"
  | "bug-fill"
  | "bug-line"
  | "code-box-fill"
  | "code-box-line"
  | "code-fill"
  | "code-line"
  | "code-s-fill"
  | "code-s-line"
  | "code-s-slash-fill"
  | "code-s-slash-line"
  | "command-fill"
  | "command-line"
  | "css3-fill"
  | "css3-line"
  | "cursor-fill"
  | "cursor-line"
  | "git-branch-fill"
  | "git-branch-line"
  | "git-close-pull-request-fill"
  | "git-close-pull-request-line"
  | "git-commit-fill"
  | "git-commit-line"
  | "git-merge-fill"
  | "git-merge-line"
  | "git-pull-request-fill"
  | "git-pull-request-line"
  | "git-repository-commits-fill"
  | "git-repository-commits-line"
  | "git-repository-fill"
  | "git-repository-line"
  | "git-repository-private-fill"
  | "git-repository-private-line"
  | "html5-fill"
  | "html5-line"
  | "javascript-fill"
  | "javascript-line"
  | "parentheses-fill"
  | "parentheses-line"
  | "terminal-box-fill"
  | "terminal-box-line"
  | "terminal-fill"
  | "terminal-line"
  | "terminal-window-fill"
  | "terminal-window-line";

export type IndexKey =
  | "BracesFill"
  | "BracesLine"
  | "BracketsFill"
  | "BracketsLine"
  | "Bug_2Fill"
  | "Bug_2Line"
  | "BugFill"
  | "BugLine"
  | "CodeBoxFill"
  | "CodeBoxLine"
  | "CodeFill"
  | "CodeLine"
  | "CodeSFill"
  | "CodeSLine"
  | "CodeSSlashFill"
  | "CodeSSlashLine"
  | "CommandFill"
  | "CommandLine"
  | "Css3Fill"
  | "Css3Line"
  | "CursorFill"
  | "CursorLine"
  | "GitBranchFill"
  | "GitBranchLine"
  | "GitClosePullRequestFill"
  | "GitClosePullRequestLine"
  | "GitCommitFill"
  | "GitCommitLine"
  | "GitMergeFill"
  | "GitMergeLine"
  | "GitPullRequestFill"
  | "GitPullRequestLine"
  | "GitRepositoryCommitsFill"
  | "GitRepositoryCommitsLine"
  | "GitRepositoryFill"
  | "GitRepositoryLine"
  | "GitRepositoryPrivateFill"
  | "GitRepositoryPrivateLine"
  | "Html5Fill"
  | "Html5Line"
  | "JavascriptFill"
  | "JavascriptLine"
  | "ParenthesesFill"
  | "ParenthesesLine"
  | "TerminalBoxFill"
  | "TerminalBoxLine"
  | "TerminalFill"
  | "TerminalLine"
  | "TerminalWindowFill"
  | "TerminalWindowLine";

export enum Index {
  BracesFill = "braces-fill",
  BracesLine = "braces-line",
  BracketsFill = "brackets-fill",
  BracketsLine = "brackets-line",
  Bug_2Fill = "bug-2-fill",
  Bug_2Line = "bug-2-line",
  BugFill = "bug-fill",
  BugLine = "bug-line",
  CodeBoxFill = "code-box-fill",
  CodeBoxLine = "code-box-line",
  CodeFill = "code-fill",
  CodeLine = "code-line",
  CodeSFill = "code-s-fill",
  CodeSLine = "code-s-line",
  CodeSSlashFill = "code-s-slash-fill",
  CodeSSlashLine = "code-s-slash-line",
  CommandFill = "command-fill",
  CommandLine = "command-line",
  Css3Fill = "css3-fill",
  Css3Line = "css3-line",
  CursorFill = "cursor-fill",
  CursorLine = "cursor-line",
  GitBranchFill = "git-branch-fill",
  GitBranchLine = "git-branch-line",
  GitClosePullRequestFill = "git-close-pull-request-fill",
  GitClosePullRequestLine = "git-close-pull-request-line",
  GitCommitFill = "git-commit-fill",
  GitCommitLine = "git-commit-line",
  GitMergeFill = "git-merge-fill",
  GitMergeLine = "git-merge-line",
  GitPullRequestFill = "git-pull-request-fill",
  GitPullRequestLine = "git-pull-request-line",
  GitRepositoryCommitsFill = "git-repository-commits-fill",
  GitRepositoryCommitsLine = "git-repository-commits-line",
  GitRepositoryFill = "git-repository-fill",
  GitRepositoryLine = "git-repository-line",
  GitRepositoryPrivateFill = "git-repository-private-fill",
  GitRepositoryPrivateLine = "git-repository-private-line",
  Html5Fill = "html5-fill",
  Html5Line = "html5-line",
  JavascriptFill = "javascript-fill",
  JavascriptLine = "javascript-line",
  ParenthesesFill = "parentheses-fill",
  ParenthesesLine = "parentheses-line",
  TerminalBoxFill = "terminal-box-fill",
  TerminalBoxLine = "terminal-box-line",
  TerminalFill = "terminal-fill",
  TerminalLine = "terminal-line",
  TerminalWindowFill = "terminal-window-fill",
  TerminalWindowLine = "terminal-window-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.BracesFill]: "57930",
  [Index.BracesLine]: "57931",
  [Index.BracketsFill]: "57932",
  [Index.BracketsLine]: "57933",
  [Index.Bug_2Fill]: "57934",
  [Index.Bug_2Line]: "57935",
  [Index.BugFill]: "57936",
  [Index.BugLine]: "57937",
  [Index.CodeBoxFill]: "57938",
  [Index.CodeBoxLine]: "57939",
  [Index.CodeFill]: "57940",
  [Index.CodeLine]: "57941",
  [Index.CodeSFill]: "57942",
  [Index.CodeSLine]: "57943",
  [Index.CodeSSlashFill]: "57944",
  [Index.CodeSSlashLine]: "57945",
  [Index.CommandFill]: "57946",
  [Index.CommandLine]: "57947",
  [Index.Css3Fill]: "57948",
  [Index.Css3Line]: "57949",
  [Index.CursorFill]: "57950",
  [Index.CursorLine]: "57951",
  [Index.GitBranchFill]: "57952",
  [Index.GitBranchLine]: "57953",
  [Index.GitClosePullRequestFill]: "57954",
  [Index.GitClosePullRequestLine]: "57955",
  [Index.GitCommitFill]: "57956",
  [Index.GitCommitLine]: "57957",
  [Index.GitMergeFill]: "57958",
  [Index.GitMergeLine]: "57959",
  [Index.GitPullRequestFill]: "57960",
  [Index.GitPullRequestLine]: "57961",
  [Index.GitRepositoryCommitsFill]: "57962",
  [Index.GitRepositoryCommitsLine]: "57963",
  [Index.GitRepositoryFill]: "57964",
  [Index.GitRepositoryLine]: "57965",
  [Index.GitRepositoryPrivateFill]: "57966",
  [Index.GitRepositoryPrivateLine]: "57967",
  [Index.Html5Fill]: "57968",
  [Index.Html5Line]: "57969",
  [Index.JavascriptFill]: "57970",
  [Index.JavascriptLine]: "57971",
  [Index.ParenthesesFill]: "57972",
  [Index.ParenthesesLine]: "57973",
  [Index.TerminalBoxFill]: "57974",
  [Index.TerminalBoxLine]: "57975",
  [Index.TerminalFill]: "57976",
  [Index.TerminalLine]: "57977",
  [Index.TerminalWindowFill]: "57978",
  [Index.TerminalWindowLine]: "57979",
};
