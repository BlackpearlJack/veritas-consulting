import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getNextServiceId, getPrevServiceId, getServiceById, services} from './data/services';
import {LuChevronLeft, LuChevronRight} from 'react-icons/lu';

export function ServiceSpotlight() {
  const navigate = useNavigate();
  const [serviceId, setServiceId] = useState(services[0].id);

  const service = getServiceById(serviceId) ?? services[0];
  const nextId = getNextServiceId(service.id);
  const prevId = getPrevServiceId(service.id);
  const index = services.findIndex((s) => s.id === service.id);

  return (
    <ServiceSpotlightBody
      key={service.id}
      serviceId={service.id}
      service={service}
      nextId={nextId}
      prevId={prevId}
      index={index}
      onNavigate={setServiceId}
      onBack={() => navigate('/')}
    />
  );
}

type BodyProps = {
  serviceId: number;
  service: NonNullable<ReturnType<typeof getServiceById>>;
  nextId: number;
  prevId: number;
  index: number;
  onNavigate: (id: number) => void;
  onBack: () => void;
};

function ServiceSpotlightBody({
                                serviceId,
                                service,
                                nextId,
                                prevId,
                                onNavigate,
                                onBack,
                              }: BodyProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(timer);
  }, []);

  const heroBg = service.color === 'dark'
    ? 'linear-gradient(135deg, #0a1628 0%, #132a54 100%)'
    : 'linear-gradient(135deg, #f8f9fb 0%, #e4e8f0 100%)';

  const circleBtnClass = (dark: boolean) =>
    dark
      ? 'p-3 rounded-full bg-white/10 hover:bg-secondary-500/20 text-white hover:text-secondary-400'
      : 'p-3 rounded-full bg-primary-900/5 hover:bg-secondary-500/20 text-primary-900 hover:text-secondary-500';

  return (
    <div className="">
      {/* Hero */}
      <div
        className={`relative min-h-screen py-6 px-6 lg:px-10 flex items-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{background: heroBg}}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p
                className={`font-body text-xs tracking-widest uppercase font-light mb-6 transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${service.color === 'dark' ? 'text-secondary-400' : 'text-secondary-500'}`}>
                {service.number} — {service.tagline}
              </p>

              <h1
                className={`font-display text-6xl md:text-7xl font-light leading-tight mb-8 transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${service.color === 'dark' ? 'text-white' : 'text-primary-900'}`}>
                {service.title}
              </h1>

              <p
                className={`font-body text-lg leading-relaxed font-light mb-10 max-w-lg transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${service.color === 'dark' ? 'text-white/60' : 'text-primary-600'}`}>
                {service.longDescription}
              </p>

              <div
                className={`flex items-center gap-4 transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <button onClick={() => onNavigate(prevId)} className={circleBtnClass(service.color === 'dark')}
                        aria-label="Previous service">
                  <LuChevronLeft size={20}/>
                </button>
                <button onClick={() => onNavigate(nextId)} className={circleBtnClass(service.color === 'dark')}
                        aria-label="Next service">
                  <LuChevronRight size={20}/>
                </button>
              </div>
            </div>

            <div className={`hidden md:block transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="grid grid-cols-2 gap-6">
                {service.benefits.slice(0, 4).map((b, i) => (
                  <div key={i}
                       className={`p-6 rounded-lg transition-all shadow-md shadow-accent-500/10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${service.color === 'dark' ? 'bg-white/5 border border-accent-500/20' : 'bg-white/50 border border-accent-200'}`}
                       style={{transitionDelay: `${i * 100}ms`}}>
                    <p
                      className={`font-body text-xs tracking-widest uppercase font-light ${service.color === 'dark' ? 'text-secondary-400' : 'text-secondary-500'}`}>Benefit {i + 1}</p>
                    <p
                      className={`font-body text-sm font-light leading-relaxed mt-3 ${service.color === 'dark' ? 'text-white/70' : 'text-primary-700'}`}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <section className="mb-24">
          <h2 className="font-display text-4xl text-primary-900 font-light mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2"><p
              className="font-body text-lg text-primary-700 font-light leading-relaxed">{service.approach}</p></div>
            <div className="bg-primary-900 p-8 rounded-lg text-white">
              <p className="font-body text-xs tracking-widest uppercase text-secondary-400 font-light mb-4">All
                Benefits</p>
              <ul className="space-y-3">{service.benefits.map((b, i) => (
                <li key={i} className="font-body text-sm font-light text-white/70 flex items-start gap-3"><span
                  className="text-secondary-400 mt-1">•</span><span>{b}</span></li>))}</ul>
            </div>
          </div>
        </section>

        <section className="bg-primary-100 p-12 rounded-lg">
          <h2 className="font-display text-4xl text-primary-900 font-light mb-8">In
            Practice: {service.caseStudy.client}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div><p
              className="font-body text-xs tracking-widest uppercase text-secondary-500 font-light mb-3">Challenge</p><p
              className="font-body text-base text-primary-700 font-light leading-relaxed">{service.caseStudy.challenge}</p>
            </div>
            <div><p
              className="font-body text-xs tracking-widest uppercase text-secondary-500 font-light mb-3">Solution</p><p
              className="font-body text-base text-primary-700 font-light leading-relaxed">{service.caseStudy.solution}</p>
            </div>
            <div><p
              className="font-body text-xs tracking-widest uppercase text-secondary-500 font-light mb-3">Outcome</p><p
              className="font-body text-base text-primary-700 font-light leading-relaxed">{service.caseStudy.outcome}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Explore list & footer */}
      <div className="border-t border-accent-300 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <p className="font-body text-xs tracking-widest uppercase text-primary-400 font-light mb-6">Explore Other
            Capabilities</p>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <button key={s.id} onClick={() => onNavigate(s.id)}
                      className={`text-left p-6 rounded-lg border transition-all duration-300 shadow-sm shadow-accent-500/5 hover:shadow-md hover:shadow-accent-500/15 ${s.id === serviceId ? 'bg-primary-900 text-white border-accent-500' : 'bg-white hover:bg-accent-50 text-primary-900 border-accent-200 hover:border-accent-500'}`}>
                <span className="font-body text-xs tracking-widest uppercase font-light opacity-60">{s.number}</span>
                <h3 className="font-display text-2xl font-light mt-2">{s.title}</h3>
                <p
                  className={`font-body text-sm font-light mt-2 ${s.id === serviceId ? 'text-white/70' : 'text-primary-600'}`}>{s.tagline}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-secondary-500 font-light mb-4">Ready to
            Explore</p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-8">Let's Talk About Your
            Challenge</h2>
          <button onClick={onBack}
                  className="inline-flex items-center gap-3 font-body text-sm font-medium tracking-widest uppercase text-primary-900 bg-secondary-500 hover:bg-secondary-400 px-8 py-4 transition-all duration-300 group">Back
            to Home
          </button>
        </div>
      </div>
    </div>
  );
}
