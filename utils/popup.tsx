export const hidePopupForADay = (popupId = '') => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem(popupId, tomorrow.toISOString());
};

export const shouldShowPopup = (popupId = '') => {
    const hideUntil = localStorage.getItem(popupId);
    if (!hideUntil) return true;

    const now = new Date();
    const hideDate = new Date(hideUntil);
    return now > hideDate;
};