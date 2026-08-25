import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Trash2, 
  Plus, 
  Vote, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle2,
  RefreshCw,
  Clock,
  Filter
} from 'lucide-react';
import { INITIAL_CAMPAIGNS, INITIAL_LIVE_FEED } from '../data/foundationData';
import { Campaign, LiveFeedItem } from '../types';

export const DashboardPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [liveFeed, setLiveFeed] = useState<LiveFeedItem[]>(INITIAL_LIVE_FEED);
  const [filter, setFilter] = useState<'All' | 'Civic Election' | 'Live' | 'Completed'>('All');
  
  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  // New Campaign Form
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Civic Election');
  const [newTarget, setNewTarget] = useState('5000000');
  const [newDesc, setNewDesc] = useState('');
  const [newLocation, setNewLocation] = useState('Lagos, Nigeria');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Live Impact & Election Dashboard | IJF Foundation";
  }, []);

  // Calculate live summary stats
  const totalRaised = campaigns.reduce((acc, c) => acc + c.raisedAmount, 0);
  const totalVotes = campaigns.reduce((acc, c) => acc + c.votesCount, 0);
  const activeCount = campaigns.filter(c => c.status === 'Live' || c.status === 'Active').length;

  // Filtered campaigns list
  const filteredCampaigns = campaigns.filter(c => {
    if (filter === 'All') return true;
    if (filter === 'Civic Election') return c.category === 'Civic Election';
    if (filter === 'Live') return c.status === 'Live' || c.status === 'Active';
    if (filter === 'Completed') return c.status === 'Completed';
    return true;
  });

  // Handle Delete Campaign / Election
  const handleDeleteConfirm = () => {
    if (deleteTargetId) {
      setCampaigns(prev => prev.filter(c => c.id !== deleteTargetId));
      setDeleteTargetId(null);
    }
  };

  // Handle Upvote / Cast Vote
  const handleVote = (id: string) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, votesCount: c.votesCount + 1 };
      }
      return c;
    }));

    // Append to live feed
    const targetCamp = campaigns.find(c => c.id === id);
    const newFeed: LiveFeedItem = {
      id: `feed-${Date.now()}`,
      type: 'vote',
      actor: 'Community Voter',
      action: `cast a live vote for "${targetCamp?.title || 'Election'}"`,
      timeAgo: 'Just now'
    };
    setLiveFeed(prev => [newFeed, ...prev.slice(0, 5)]);
  };

  // Simulate Incoming Live Donation
  const handleSimulateDonation = () => {
    if (campaigns.length === 0) return;
    const randomIndex = Math.floor(Math.random() * campaigns.length);
    const donationAmount = Math.floor(Math.random() * 5 + 1) * 10000;

    setCampaigns(prev => prev.map((c, i) => {
      if (i === randomIndex) {
        return { ...c, raisedAmount: c.raisedAmount + donationAmount };
      }
      return c;
    }));

    const newFeed: LiveFeedItem = {
      id: `feed-${Date.now()}`,
      type: 'donation',
      actor: 'Live Supporter',
      action: `donated to ${campaigns[randomIndex].title}`,
      amount: `₦${donationAmount.toLocaleString()}`,
      timeAgo: 'Just now'
    };
    setLiveFeed(prev => [newFeed, ...prev.slice(0, 5)]);
  };

  // Handle Create New Campaign / Election
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created: Campaign = {
      id: `camp-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      targetAmount: parseInt(newTarget, 10) || 1000000,
      raisedAmount: 0,
      votesCount: 0,
      status: 'Live',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '2026-12-31',
      description: newDesc || 'Youth leadership campaign and civic participation drive.',
      location: newLocation,
      image: '/images/youth-empo-1-1.jpg'
    };

    setCampaigns(prev => [created, ...prev]);
    setShowCreateModal(false);
    setNewTitle('');
    setNewDesc('');
  };

  return (
    <main className="bg-[#FFFDF9] min-h-screen py-10 lg:py-16 text-navy-950 font-sans selection:bg-coral-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Neubrutalist Dashboard Title Header */}
        <div className="bg-amber-300 border-4 border-navy-950 p-6 sm:p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(10,25,47,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-navy-950 text-white px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>LIVE DASHBOARD & CIVIC ELECTIONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-none uppercase">
              Foundation Command Center
            </h1>
            <p className="text-navy-900 font-bold text-base sm:text-lg max-w-2xl">
              Track live community donations, manage youth leadership council elections, monitor volunteer feeds, and archive campaigns in real time.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleSimulateDonation}
              className="px-5 py-3 rounded-2xl bg-coral-500 text-white font-black text-sm border-3 border-navy-950 shadow-[4px_4px_0px_0px_rgba(10,25,47,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center space-x-2"
            >
              <Zap className="w-4 h-4 fill-current text-yellow-300" />
              <span>Simulate Live Donation</span>
            </button>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-5 py-3 rounded-2xl bg-emerald-400 text-navy-950 font-black text-sm border-3 border-navy-950 shadow-[4px_4px_0px_0px_rgba(10,25,47,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center space-x-2"
            >
              <Plus className="w-5 h-5 stroke-[3]" />
              <span>Launch Campaign / Election</span>
            </button>
          </div>
        </div>

        {/* 4 Neubrutalist Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-coral-100 border-3 border-navy-950 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-navy-900 tracking-wider">Total Raised</span>
              <DollarSign className="w-6 h-6 text-coral-600" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-navy-950">
              ₦{totalRaised.toLocaleString()}
            </p>
            <span className="inline-block bg-coral-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
              Live Allocation
            </span>
          </div>

          <div className="bg-sky-100 border-3 border-navy-950 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-navy-900 tracking-wider">Civic Votes Cast</span>
              <Vote className="w-6 h-6 text-sky-600" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-navy-950">
              {totalVotes.toLocaleString()}
            </p>
            <span className="inline-block bg-sky-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
              Youth Delegates
            </span>
          </div>

          <div className="bg-emerald-100 border-3 border-navy-950 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-navy-900 tracking-wider">Active Campaigns</span>
              <Activity className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-navy-950">
              {activeCount}
            </p>
            <span className="inline-block bg-emerald-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
              {campaigns.length} Total Registered
            </span>
          </div>

          <div className="bg-purple-100 border-3 border-navy-950 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-navy-900 tracking-wider">Verified Reach</span>
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-navy-950">
              5,000+
            </p>
            <span className="inline-block bg-purple-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
              Grassroots Youth
            </span>
          </div>

        </div>

        {/* Dashboard Main Grid: Campaigns List (Left) + Live Feed Ticker (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campaigns & Civic Elections Management */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-white border-3 border-navy-950 p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(10,25,47,1)] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-navy-950" />
                <span className="text-xs font-black uppercase tracking-wider text-navy-950">Filter Initiatives:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(['All', 'Civic Election', 'Live', 'Completed'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all border-2 border-navy-950 ${
                      filter === tab
                        ? 'bg-navy-950 text-amber-300 shadow-[2px_2px_0px_0px_rgba(230,57,70,1)]'
                        : 'bg-slate-100 text-navy-950 hover:bg-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Campaign Cards Grid */}
            <div className="space-y-6">
              {filteredCampaigns.length === 0 ? (
                <div className="bg-white border-3 border-navy-950 p-12 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] text-center space-y-4">
                  <Vote className="w-12 h-12 text-slate-400 mx-auto" />
                  <h3 className="text-xl font-black text-navy-950">No Campaigns Found</h3>
                  <p className="text-sm font-bold text-slate-600">No initiatives match your selected filter.</p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-6 py-2.5 rounded-xl bg-coral-500 text-white font-black text-xs uppercase border-2 border-navy-950 shadow-[3px_3px_0px_0px_rgba(10,25,47,1)]"
                  >
                    Launch New Election / Campaign
                  </button>
                </div>
              ) : (
                filteredCampaigns.map((camp) => {
                  const percent = Math.min(100, Math.round((camp.raisedAmount / camp.targetAmount) * 100));

                  return (
                    <div
                      key={camp.id}
                      className="bg-white border-3 border-navy-950 p-6 sm:p-7 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] hover:shadow-[8px_8px_0px_0px_rgba(230,57,70,1)] transition-all space-y-6 group"
                    >
                      
                      {/* Top Bar: Title & Category */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="bg-navy-950 text-amber-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-navy-950">
                              {camp.category}
                            </span>
                            <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md border border-navy-950 ${
                              camp.status === 'Live' ? 'bg-emerald-400 text-navy-950' : camp.status === 'Active' ? 'bg-sky-400 text-navy-950' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {camp.status}
                            </span>
                          </div>

                          <h3 className="text-2xl font-black text-navy-950 group-hover:text-coral-600 transition-colors">
                            {camp.title}
                          </h3>
                        </div>

                        {/* Action Buttons: Vote & Delete */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleVote(camp.id)}
                            className="px-4 py-2 rounded-xl bg-sky-400 hover:bg-sky-500 text-navy-950 font-black text-xs uppercase border-2 border-navy-950 shadow-[3px_3px_0px_0px_rgba(10,25,47,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center space-x-1.5"
                            title="Cast a vote or support this campaign"
                          >
                            <Vote className="w-4 h-4" />
                            <span>+1 Vote ({camp.votesCount})</span>
                          </button>

                          <button
                            onClick={() => setDeleteTargetId(camp.id)}
                            className="p-2.5 rounded-xl bg-coral-100 hover:bg-coral-500 text-coral-600 hover:text-white border-2 border-navy-950 shadow-[3px_3px_0px_0px_rgba(10,25,47,1)] transition-all"
                            title="Delete this campaign / election"
                            aria-label={`Delete ${camp.title}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Description & Location */}
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                        {camp.description}
                      </p>

                      {/* Progress Bar & Numerical Metrics */}
                      <div className="space-y-2 bg-linen-100 p-4 rounded-2xl border-2 border-navy-950">
                        <div className="flex justify-between items-center text-xs font-black">
                          <span>Progress ({percent}%)</span>
                          <span>₦{camp.raisedAmount.toLocaleString()} / ₦{camp.targetAmount.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-4 bg-white rounded-full border-2 border-navy-950 overflow-hidden p-0.5">
                          <div
                            className="h-full bg-coral-500 rounded-full transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </div>

                      {/* Footer Info: Location & Vote Counter */}
                      <div className="flex items-center justify-between text-xs font-black text-slate-600">
                        <span>📍 {camp.location}</span>
                        <span>🗳️ Total Votes: {camp.votesCount.toLocaleString()}</span>
                      </div>

                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* Right Column: Neubrutalist Live Activity Ticker & Ambassadors */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Activity Feed Box */}
            <div className="bg-emerald-300 border-3 border-navy-950 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b-2 border-navy-950">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-navy-950 animate-ping"></span>
                  <h2 className="text-lg font-black uppercase text-navy-950 tracking-wider">Live Activity Feed</h2>
                </div>
                <button
                  onClick={() => setLiveFeed([...INITIAL_LIVE_FEED])}
                  className="text-navy-950 hover:rotate-180 transition-transform p-1"
                  title="Refresh activity feed"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {liveFeed.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-navy-950 p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_rgba(10,25,47,1)] space-y-1 animate-fadeIn"
                  >
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-navy-950">{item.actor}</span>
                      <span className="text-slate-500 font-bold text-[10px]">{item.timeAgo}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700 leading-snug">
                      {item.action}
                    </p>
                    {item.amount && (
                      <span className="inline-block bg-coral-500 text-white font-black text-[10px] px-2 py-0.5 rounded-md border border-navy-950">
                        {item.amount}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Youth Leaderboard Widget */}
            <div className="bg-white border-3 border-navy-950 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(10,25,47,1)] space-y-4">
              <div className="flex items-center space-x-2 border-b-2 border-navy-950 pb-3">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-black text-navy-950 uppercase tracking-wider">
                  Top Youth Ambassadors
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Oluwaseun A.', role: 'Lagos Campus Lead', points: '1,450 Votes' },
                  { name: 'Fatima B.', role: 'Kano Tech Coordinator', points: '1,280 Votes' },
                  { name: 'Emeka U.', role: 'Delta Civic Ambassador', points: '940 Votes' },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-linen-100 border-2 border-navy-950">
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-xl bg-navy-950 text-amber-300 font-black text-xs flex items-center justify-center">
                        #{i + 1}
                      </span>
                      <div>
                        <span className="block text-xs font-black text-navy-950">{lead.name}</span>
                        <span className="text-[10px] font-bold text-slate-500">{lead.role}</span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-coral-600 bg-coral-50 px-2 py-1 rounded-lg border border-coral-200">
                      {lead.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Delete Campaign Confirmation Modal */}
      {deleteTargetId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setDeleteTargetId(null)}
          />
          <div className="relative bg-white border-4 border-navy-950 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[10px_10px_0px_0px_rgba(230,57,70,1)] space-y-6 z-10 animate-scaleUp">
            <div className="w-12 h-12 rounded-2xl bg-coral-100 border-2 border-navy-950 text-coral-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-navy-950 uppercase">Delete Campaign?</h3>
              <p className="text-sm font-bold text-slate-600">
                Are you sure you want to permanently delete this election/campaign? This action cannot be undone.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setDeleteTargetId(null)}
                className="py-3 rounded-2xl border-3 border-navy-950 font-black text-sm bg-slate-100 hover:bg-slate-200 text-navy-950 shadow-[3px_3px_0px_0px_rgba(10,25,47,1)]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="py-3 rounded-2xl border-3 border-navy-950 font-black text-sm bg-coral-500 hover:bg-coral-600 text-white shadow-[3px_3px_0px_0px_rgba(10,25,47,1)]"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create New Campaign / Election Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setShowCreateModal(false)}
          />
          <div className="relative bg-white border-4 border-navy-950 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-[10px_10px_0px_0px_rgba(10,25,47,1)] space-y-6 z-10 animate-scaleUp">
            
            <div className="flex items-center justify-between pb-3 border-b-2 border-navy-950">
              <h3 className="text-xl font-black text-navy-950 uppercase">Launch Campaign / Election</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="font-black text-navy-950 hover:text-coral-500"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase text-navy-950 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Regional Youth Representative Election 2026"
                  className="w-full px-4 py-3 rounded-xl border-2 border-navy-950 font-bold text-sm bg-linen-50 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-navy-950 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-navy-950 font-bold text-sm bg-linen-50 focus:outline-none"
                  >
                    <option value="Civic Election">Civic Election</option>
                    <option value="Education Tech">Education Tech</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Community Welfare">Community Welfare</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-navy-950 mb-1">
                    Target Goal (₦)
                  </label>
                  <input
                    type="number"
                    value={newTarget}
                    onChange={(e) => setNewTarget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-navy-950 font-bold text-sm bg-linen-50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-navy-950 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="e.g. Lagos, Nigeria"
                  className="w-full px-4 py-3 rounded-xl border-2 border-navy-950 font-bold text-sm bg-linen-50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-navy-950 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Provide campaign details and election criteria..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-navy-950 font-bold text-sm bg-linen-50 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-emerald-400 hover:bg-emerald-500 text-navy-950 font-black text-base border-3 border-navy-950 shadow-[4px_4px_0px_0px_rgba(10,25,47,1)] transition-all"
              >
                Launch Initiative Now
              </button>
            </form>

          </div>
        </div>
      )}

    </main>
  );
};
