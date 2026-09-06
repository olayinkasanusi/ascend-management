import React, { useState } from 'react';
import IntakeHeader from '../components/application/IntakeHeader';
import IntakeTabSwitcher from '../components/application/IntakeTabSwitcher';
import CalendarBookingView from '../components/application/CalendarBookingView';
import WrittenApplicationView from '../components/application/WrittenApplicationView';
import AssuranceCards from '../components/application/AssuranceCards';

export default function ApplicationPage({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' | 'written'

  return (
    <div className="w-full pb-space-3xl">
      <IntakeHeader />

      <div className="max-w-4xl mx-auto px-margin-mobile">
        <div className="glass-container-elevated rounded-[24px] p-6 md:p-12 relative shadow-2xl border border-tertiary-fixed-dim overflow-hidden transition-all duration-300">
          <IntakeTabSwitcher
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {activeTab === 'calendar' && (
            <CalendarBookingView onOpenModal={onOpenModal} />
          )}

          {activeTab === 'written' && (
            <WrittenApplicationView onOpenModal={onOpenModal} />
          )}
        </div>

        <AssuranceCards />
      </div>
    </div>
  );
}
