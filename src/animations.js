export const titleAnim = {
    hidden: {
        y: -500,
        opacity: -1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
        },
    },
};

export const titleAnim2 = {
    hidden: {
        y: 500,
        opacity: -1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.75,
        },
    },
};

export const titleAnim3 = {
    hidden: {
        y: -500,
        opacity: -1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
};

export const titleAnim4 = {
    hidden: {
        y: 500,
        opacity: -1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.25,
        },
    },
};

export const titleAnim5 = {
    hidden: {
        y: -500,
        opacity: -1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.5,
        },
    },
};

export const titleAnim6 = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1.4,
        },
    },
    exit: {
        y: 500,
        opacity: 0,
        transition: {
            duration: 0.7,
        },
    }
};

export const titleAnim7 = {
    hidden: {
        y: -100,
        opacity: 0.1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 2.4,
        },
    },
    exit: {
        y: -100,
        opacity: 0.1,
        transition: {
            duration: 1.5,
        },
    }
};

export const titleAnim8 = {
    hidden: {
        y: -100,
        opacity: 1,
    },
    show: {
        y: 0,
        opacity: 0.3,
        transition: {
            ease: 'easeOut',
            duration: 2.4,
        },
    },
    exit: {
        y: -100,
        opacity: 0.1,
        transition: {
            duration: 1.5,
        },
    }
};

export const contactFormAnim = {
    hidden: {
        y: 0,
        scale: 0,
        //opacity: 0,
    },
    show: {
        y: -445,
        scale: 1,
        //opacity: 1,
        transition: {
            type: 'spring',
            ease: 'easeOut',
            bounce: 0.3,
            duration: 1.75,
        },
    },
    exit: {
        y: 0,
        scale: 0,
        //opacity: 0,
        transition: {
            //ease: 'easeOut',
            duration: 0.5,
        },
    }
};

export const cardSlide = {
    hidden: {
        opacity: 0,
        x: -500,
        transition: {
            duration: 0.15,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.7,
        },
    },
    exit: {
        x: -500,
        opacity: 0,
        transition: {
            duration: 0.7,
        },
    },
};

export const navAnim = {
    hidden: {
        opacity: -10,
        y: -500,
        transition: {
            duration: 0.15,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 3.75,
        },
    }
};

export const footerAnim = {
    hidden: {
        opacity: 0,
        scale: 0,
        y: 50,
        transition: {
            duration: 1.25,
        },
    },
    show: {
        scale: 1,
        opacity: 1,
        y: 6,
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    }
};