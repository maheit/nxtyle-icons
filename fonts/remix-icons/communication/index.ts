export type IndexId =
  | "chat-1-fill"
  | "chat-1-line"
  | "chat-2-fill"
  | "chat-2-line"
  | "chat-3-fill"
  | "chat-3-line"
  | "chat-4-fill"
  | "chat-4-line"
  | "chat-check-fill"
  | "chat-check-line"
  | "chat-delete-fill"
  | "chat-delete-line"
  | "chat-download-fill"
  | "chat-download-line"
  | "chat-follow-up-fill"
  | "chat-follow-up-line"
  | "chat-forward-fill"
  | "chat-forward-line"
  | "chat-heart-fill"
  | "chat-heart-line"
  | "chat-history-fill"
  | "chat-history-line"
  | "chat-new-fill"
  | "chat-new-line"
  | "chat-off-fill"
  | "chat-off-line"
  | "chat-poll-fill"
  | "chat-poll-line"
  | "chat-private-fill"
  | "chat-private-line"
  | "chat-quote-fill"
  | "chat-quote-line"
  | "chat-settings-fill"
  | "chat-settings-line"
  | "chat-smile-2-fill"
  | "chat-smile-2-line"
  | "chat-smile-3-fill"
  | "chat-smile-3-line"
  | "chat-smile-fill"
  | "chat-smile-line"
  | "chat-upload-fill"
  | "chat-upload-line"
  | "chat-voice-fill"
  | "chat-voice-line"
  | "discuss-fill"
  | "discuss-line"
  | "emoji-sticker-fill"
  | "emoji-sticker-line"
  | "feedback-fill"
  | "feedback-line"
  | "message-2-fill"
  | "message-2-line"
  | "message-3-fill"
  | "message-3-line"
  | "message-fill"
  | "message-line"
  | "question-answer-fill"
  | "question-answer-line"
  | "questionnaire-fill"
  | "questionnaire-line"
  | "speak-fill"
  | "speak-line"
  | "video-chat-fill"
  | "video-chat-line";

export type IndexKey =
  | "Chat_1Fill"
  | "Chat_1Line"
  | "Chat_2Fill"
  | "Chat_2Line"
  | "Chat_3Fill"
  | "Chat_3Line"
  | "Chat_4Fill"
  | "Chat_4Line"
  | "ChatCheckFill"
  | "ChatCheckLine"
  | "ChatDeleteFill"
  | "ChatDeleteLine"
  | "ChatDownloadFill"
  | "ChatDownloadLine"
  | "ChatFollowUpFill"
  | "ChatFollowUpLine"
  | "ChatForwardFill"
  | "ChatForwardLine"
  | "ChatHeartFill"
  | "ChatHeartLine"
  | "ChatHistoryFill"
  | "ChatHistoryLine"
  | "ChatNewFill"
  | "ChatNewLine"
  | "ChatOffFill"
  | "ChatOffLine"
  | "ChatPollFill"
  | "ChatPollLine"
  | "ChatPrivateFill"
  | "ChatPrivateLine"
  | "ChatQuoteFill"
  | "ChatQuoteLine"
  | "ChatSettingsFill"
  | "ChatSettingsLine"
  | "ChatSmile_2Fill"
  | "ChatSmile_2Line"
  | "ChatSmile_3Fill"
  | "ChatSmile_3Line"
  | "ChatSmileFill"
  | "ChatSmileLine"
  | "ChatUploadFill"
  | "ChatUploadLine"
  | "ChatVoiceFill"
  | "ChatVoiceLine"
  | "DiscussFill"
  | "DiscussLine"
  | "EmojiStickerFill"
  | "EmojiStickerLine"
  | "FeedbackFill"
  | "FeedbackLine"
  | "Message_2Fill"
  | "Message_2Line"
  | "Message_3Fill"
  | "Message_3Line"
  | "MessageFill"
  | "MessageLine"
  | "QuestionAnswerFill"
  | "QuestionAnswerLine"
  | "QuestionnaireFill"
  | "QuestionnaireLine"
  | "SpeakFill"
  | "SpeakLine"
  | "VideoChatFill"
  | "VideoChatLine";

export enum Index {
  Chat_1Fill = "chat-1-fill",
  Chat_1Line = "chat-1-line",
  Chat_2Fill = "chat-2-fill",
  Chat_2Line = "chat-2-line",
  Chat_3Fill = "chat-3-fill",
  Chat_3Line = "chat-3-line",
  Chat_4Fill = "chat-4-fill",
  Chat_4Line = "chat-4-line",
  ChatCheckFill = "chat-check-fill",
  ChatCheckLine = "chat-check-line",
  ChatDeleteFill = "chat-delete-fill",
  ChatDeleteLine = "chat-delete-line",
  ChatDownloadFill = "chat-download-fill",
  ChatDownloadLine = "chat-download-line",
  ChatFollowUpFill = "chat-follow-up-fill",
  ChatFollowUpLine = "chat-follow-up-line",
  ChatForwardFill = "chat-forward-fill",
  ChatForwardLine = "chat-forward-line",
  ChatHeartFill = "chat-heart-fill",
  ChatHeartLine = "chat-heart-line",
  ChatHistoryFill = "chat-history-fill",
  ChatHistoryLine = "chat-history-line",
  ChatNewFill = "chat-new-fill",
  ChatNewLine = "chat-new-line",
  ChatOffFill = "chat-off-fill",
  ChatOffLine = "chat-off-line",
  ChatPollFill = "chat-poll-fill",
  ChatPollLine = "chat-poll-line",
  ChatPrivateFill = "chat-private-fill",
  ChatPrivateLine = "chat-private-line",
  ChatQuoteFill = "chat-quote-fill",
  ChatQuoteLine = "chat-quote-line",
  ChatSettingsFill = "chat-settings-fill",
  ChatSettingsLine = "chat-settings-line",
  ChatSmile_2Fill = "chat-smile-2-fill",
  ChatSmile_2Line = "chat-smile-2-line",
  ChatSmile_3Fill = "chat-smile-3-fill",
  ChatSmile_3Line = "chat-smile-3-line",
  ChatSmileFill = "chat-smile-fill",
  ChatSmileLine = "chat-smile-line",
  ChatUploadFill = "chat-upload-fill",
  ChatUploadLine = "chat-upload-line",
  ChatVoiceFill = "chat-voice-fill",
  ChatVoiceLine = "chat-voice-line",
  DiscussFill = "discuss-fill",
  DiscussLine = "discuss-line",
  EmojiStickerFill = "emoji-sticker-fill",
  EmojiStickerLine = "emoji-sticker-line",
  FeedbackFill = "feedback-fill",
  FeedbackLine = "feedback-line",
  Message_2Fill = "message-2-fill",
  Message_2Line = "message-2-line",
  Message_3Fill = "message-3-fill",
  Message_3Line = "message-3-line",
  MessageFill = "message-fill",
  MessageLine = "message-line",
  QuestionAnswerFill = "question-answer-fill",
  QuestionAnswerLine = "question-answer-line",
  QuestionnaireFill = "questionnaire-fill",
  QuestionnaireLine = "questionnaire-line",
  SpeakFill = "speak-fill",
  SpeakLine = "speak-line",
  VideoChatFill = "video-chat-fill",
  VideoChatLine = "video-chat-line",
}

export const INDEX_CODEPOINTS: { [key in Index]: string } = {
  [Index.Chat_1Fill]: "57702",
  [Index.Chat_1Line]: "57703",
  [Index.Chat_2Fill]: "57704",
  [Index.Chat_2Line]: "57705",
  [Index.Chat_3Fill]: "57706",
  [Index.Chat_3Line]: "57707",
  [Index.Chat_4Fill]: "57708",
  [Index.Chat_4Line]: "57709",
  [Index.ChatCheckFill]: "57710",
  [Index.ChatCheckLine]: "57711",
  [Index.ChatDeleteFill]: "57712",
  [Index.ChatDeleteLine]: "57713",
  [Index.ChatDownloadFill]: "57714",
  [Index.ChatDownloadLine]: "57715",
  [Index.ChatFollowUpFill]: "57716",
  [Index.ChatFollowUpLine]: "57717",
  [Index.ChatForwardFill]: "57718",
  [Index.ChatForwardLine]: "57719",
  [Index.ChatHeartFill]: "57720",
  [Index.ChatHeartLine]: "57721",
  [Index.ChatHistoryFill]: "57722",
  [Index.ChatHistoryLine]: "57723",
  [Index.ChatNewFill]: "57724",
  [Index.ChatNewLine]: "57725",
  [Index.ChatOffFill]: "57726",
  [Index.ChatOffLine]: "57727",
  [Index.ChatPollFill]: "57728",
  [Index.ChatPollLine]: "57729",
  [Index.ChatPrivateFill]: "57730",
  [Index.ChatPrivateLine]: "57731",
  [Index.ChatQuoteFill]: "57732",
  [Index.ChatQuoteLine]: "57733",
  [Index.ChatSettingsFill]: "57734",
  [Index.ChatSettingsLine]: "57735",
  [Index.ChatSmile_2Fill]: "57736",
  [Index.ChatSmile_2Line]: "57737",
  [Index.ChatSmile_3Fill]: "57738",
  [Index.ChatSmile_3Line]: "57739",
  [Index.ChatSmileFill]: "57740",
  [Index.ChatSmileLine]: "57741",
  [Index.ChatUploadFill]: "57742",
  [Index.ChatUploadLine]: "57743",
  [Index.ChatVoiceFill]: "57744",
  [Index.ChatVoiceLine]: "57745",
  [Index.DiscussFill]: "57746",
  [Index.DiscussLine]: "57747",
  [Index.EmojiStickerFill]: "57748",
  [Index.EmojiStickerLine]: "57749",
  [Index.FeedbackFill]: "57750",
  [Index.FeedbackLine]: "57751",
  [Index.Message_2Fill]: "57752",
  [Index.Message_2Line]: "57753",
  [Index.Message_3Fill]: "57754",
  [Index.Message_3Line]: "57755",
  [Index.MessageFill]: "57756",
  [Index.MessageLine]: "57757",
  [Index.QuestionAnswerFill]: "57758",
  [Index.QuestionAnswerLine]: "57759",
  [Index.QuestionnaireFill]: "57760",
  [Index.QuestionnaireLine]: "57761",
  [Index.SpeakFill]: "57762",
  [Index.SpeakLine]: "57763",
  [Index.VideoChatFill]: "57764",
  [Index.VideoChatLine]: "57765",
};
