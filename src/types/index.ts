export type UserType = {
  id: string
  displayName: string
};

export type AuthType = {
  accessToken: string | null
  refreshToken: string | null
};

export type RoomType = {
  id: string
  roomName: string
};
