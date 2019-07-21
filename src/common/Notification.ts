export enum NotificationType {
    Error, Info
}

export interface Notification {
    message: string,
    type?: NotificationType,
    isActive?: boolean
}