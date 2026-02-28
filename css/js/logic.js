const IROS_Engine = {
    state: {
        vse_score: 0.92,
        active_bookings: 142,
        vip_status: "SECURE",
        approvals_pending: 2
    },

    // Simulates a conflict between Resource Booking and Dignitary Schedule
    triggerConflict: function() {
        console.warn("Conflict Detected: VIP Route intersects with AV Setup in Hall A");
        this.resolveVSE();
    },

    resolveVSE: function() {
        console.log("VSE Engine: Calculating alternative spatial node...");
        this.state.vse_score = 0.98;
        this.updateUI();
    },

    updateUI: function() {
        const badge = document.getElementById('vse-score');
        if(badge) badge.innerText = `TOF: ${this.state.vse_score}`;
    }
};
